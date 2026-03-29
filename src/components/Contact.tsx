import React from 'react';
import TextType from './TextType';

const Contact = () => {
  return (
    <section className="py-24 px-6 bg-primary-container border-t-[5px] border-inverse-surface" id="contact">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <TextType 
            text="LET'S BUILD SOMETHING RADICAL."
            as="h2"
            typingSpeed={90 }
            pauseDuration={1800}
            showCursor={true}
            cursorCharacter="_"
            className="font-headline font-black text-6xl md:text-7xl uppercase leading-[0.9] mb-8 text-inverse-surface block min-h-[180px] md:min-h-[220px]"
          />
          <p className="text-2xl font-bold uppercase mb-12 max-w-md">I am currently available for new projects, full-time roles, or collaborative experiments.</p>
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="bg-inverse-surface text-white p-3 border-[2px] border-inverse-surface">
                <span className="material-symbols-outlined">mail</span>
              </div>
              <span className="font-headline font-bold text-xl uppercase">hello@pushkarajpalli.dev</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-inverse-surface text-white p-3 border-[2px] border-inverse-surface">
                <span className="material-symbols-outlined">location_on</span>
              </div>
              <span className="font-headline font-bold text-xl uppercase">Brooklyn, New York City</span>
            </div>
          </div>
          <div className="mt-12 flex gap-4">
            <a className="bg-white border-[3px] border-inverse-surface p-4 neo-shadow hover:bg-tertiary-container transition-colors" href="#">
              <img alt="GitHub" className="w-8 h-8" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAuzLmB3EiLdYpTFmVbS3PqK9VAJenH7R8YRmTcllMbFy7k2KApm6wm8EmopZ7hdAlsUSVLQgj0i2B7vk1IqiVjw1m2x-ntVnwtBi4k1j6rV-rMaZ7lHQrAg3QTfwE48pIVkDLdOURUwu7zhNXbbYfyn9FVoypuo1OJGGvPl6-I7UMcrtSRyZHutQDa3ryh61U7qsR9OZtJt8vN02LrrZcI7b8IVko1huxH-kz9zbVV0nNv7D_mlr0jj07Ah9xKr90jY7IeGN0Hbo" />
            </a>
            <a className="bg-white border-[3px] border-inverse-surface p-4 neo-shadow hover:bg-tertiary-container transition-colors" href="#">
              <img alt="LinkedIn" className="w-8 h-8" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwbzisDOzNwLWk-xP3MZXqQP62wm07iiEh3wI99qfMiBQVwrzPm9WJ0XuhqgdH4L8cK6TzuCMk0AFK2jHD8B2Hs7glnttaP0hHdWP1q8EVWK16mWXWuUBcn3Q6sjId_cQXOYbIUw4UU1u2FNClW5nrDUBVeR4Wtg5o02EnsxkWQOsbGg90ucKay3OmUG3y99OuO03xGBw3zetFY2Aij75or1abqWU9A3tp88xPdZxh_sVm9pZvEsPyueDKuTs2t9VlH9O9iStlMzI" />
            </a>
            <a className="bg-white border-[3px] border-inverse-surface p-4 neo-shadow hover:bg-tertiary-container transition-colors" href="#">
              <img alt="Twitter" className="w-8 h-8" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzhLUIvp7sC06YDLnSpfROHrhD-i7f-70o51-7ST0dg7fVqVtuu2xDgKQfE58b-y-aALyZFqpGQRGb-UBqh_plukVH5Mm-MoKbeg_7l895pmt9_aLFfKRB87ZBrYt_5FCwSp6yIaP9evxUNHq3bmwU7dfgvUUv2yHjEmjeTwXyI2pkFyZtvP5onl6p9oPrXnl_0RSIltHCp_wgSk4ALbmbi4cdFJbLxdmsML6hzDwOwe6Xdc7GWEIeRq_GqHWRPegnG1GuL9gekmg" />
            </a>
          </div>
        </div>
        <div className="bg-white border-[5px] border-inverse-surface p-10 neo-shadow-lg">
          <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block font-headline font-bold uppercase text-sm mb-2">Your Name</label>
              <input 
                className="w-full bg-surface border-[3px] border-inverse-surface p-4 font-bold focus:outline-none focus:bg-tertiary-container focus:neo-shadow transition-all" 
                placeholder="JOHN DOE" 
                type="text" 
              />
            </div>
            <div>
              <label className="block font-headline font-bold uppercase text-sm mb-2">Email Address</label>
              <input 
                className="w-full bg-surface border-[3px] border-inverse-surface p-4 font-bold focus:outline-none focus:bg-tertiary-container focus:neo-shadow transition-all" 
                placeholder="JOHN@EXAMPLE.COM" 
                type="email" 
              />
            </div>
            <div>
              <label className="block font-headline font-bold uppercase text-sm mb-2">The Brief</label>
              <textarea 
                className="w-full bg-surface border-[3px] border-inverse-surface p-4 font-bold focus:outline-none focus:bg-tertiary-container focus:neo-shadow transition-all" 
                placeholder="TELL ME ABOUT YOUR VISION..." 
                rows={4}
              ></textarea>
            </div>
            <button 
              className="bg-inverse-surface text-white py-6 font-headline font-black text-2xl uppercase border-[3px] border-inverse-surface hover:bg-white hover:text-inverse-surface neo-shadow hover:translate-y-[-4px] active:translate-y-[2px] active:shadow-none transition-all" 
              type="submit"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
