import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
    }

    const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;
    const apiKey = process.env.NEXT_PUBLIC_FIREBASE_API_KEY;

    if (!projectId || !apiKey) {
      console.error('Missing Firebase env vars');
      return NextResponse.json({ error: 'Server configuration error.' }, { status: 500 });
    }

    // Use Firestore REST API — no WebChannel, no client-side SDK, no ad blocker issues
    const firestoreUrl = `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/contacts?key=${apiKey}`;

    const firestorePayload = {
      fields: {
        name: { stringValue: name.trim() },
        email: { stringValue: email.trim() },
        message: { stringValue: message.trim() },
        createdAt: { timestampValue: new Date().toISOString() },
      },
    };

    const response = await fetch(firestoreUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(firestorePayload),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Firestore REST error:', errorData);
      return NextResponse.json({ error: 'Failed to save message.' }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error('API route error:', err);
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 });
  }
}
