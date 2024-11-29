gsap.fromTo(".orange", {
    backgroundColor: "hsl(135, 35%, 55%)",
    scale:0
}, {
    backgroundColor: "hsl(155, 35%, 60%)",
    duration: 3,
    repeat: -1,
    yoyo: true, 
    scale: 1
});
gsap.fromTo(".blue", {
    backgroundColor: "hsl(30, 65%, 60%)",
    scale:0
}, {
    backgroundColor: "hsl(50, 75%, 55%)",
    duration: 2,
    repeat: -1,
    yoyo: true, 
    scale: 1
})



const button = document.querySelector("#btn");
const par = document.querySelector("#par");
const now = new Date();

const quotesMonday = [
    "“It’s Monday … time to motivate and make dreams and goals happen. Let’s go!” —Heather Stillufsen",
    "“It was a Monday and they walked on a tightrope to the sun.” ―Marcus Zusak",
    "“Goodbye, blue Monday.” ―Kurt Vonnegut",
    "“So. Monday. We meet again. We will never be friends—but maybe we can move past our mutual enmity toward a more positive partnership.” ―Julio-Alexi Genao",
    "“When life gives you Monday, dip it in glitter and sparkle all day.” —Ella Woodword",
    "“Monday c’est Mon Day.” —Unknown",
    "“All Motivation Mondays need are a little more coffee and a lot more mascara.” —Unknown",
    "“I’m alive, motivated and ready to slay the day #MONSLAY.” —Unknown",
    "“One day or day one. You decide.” —Unknown",
];
const quotesTuesday = [
    "“Happy Tuesday! Decide what you want. Believe you can have it. Believe you deserve it and believe it’s possible for you.” – Jack Canfield",
    "“Hold onto positive things that elevate your spirit and be with positive people. Happy Tuesday.” – Tracey Edmonds",
    "“Be the change you want to see. To make this a happy Tuesday spread the positive vibes and joy out into your world.” – Unknown",
    "“Did someone order a bright and sunny day? Well…here it is. Happy Tuesday!” – Anthony T. Hincks",
    "“This Tuesday radiates hope. Fill your world with warm sunshine and love. And let God shower you with blessings on this good Tuesday.” – Joy Fields",
    "“It's Terrific Tuesday. Let your dreams be bigger than your fears, your actions louder than your words, and your faith stronger than your feelings!” – Unknown",
    "“Start your Thursday with an attitude of optimism. It’s going to be a good day!” – Kate Summers",
    "“Tuesday is a good day, you survived Monday. And tomorrow is Wednesday, halfway through your work week!” – Kate Summers"
];
const quotesWednesday = [
    "“Good morning. Be Happy. Smile. Be fearless. Most importantly be you. You’re unique and special. No one will ever replace you. Happy Wednesday!”",
    "“Happy Wednesday! I thought that I would stop by with a smile to brighten up your Wednesday for a while.”",
    "“It’s woohoo Wednesday. Today is going to be a good day.”",
    "“Each morning is the open door to a new world – new vistas, new aims, new plans, new things…Wednesday morning is no less.”",
    "“Focus on good thoughts and good things will happen. Stay positive, think positive and do positively on this Wednesday morning!”",
    "“It’s not Wednesday…. It’s WIN THIS DAY!” – The STRIVE",
    "“To some its Hump Day. To us, it’s Wednesday’s getting its ass kicked and Thursday just asked Friday to switch places.” – Dwayne Johnson",
    "“Wednesday will either make you or break you. You are either on the upward trend or the downward slide to the end of the work week. Give it all you got this Wednesday!” – Catherine Pulsifer"
];
const quotesThursday = [
    "“Make it your goal to make someone smile on this Thursday by a small act of kindness, you could change a person’s life in a way you may not even realize” ― Catherine Pulsifer",
    "“Life is like riding a bicycle. To keep your balance, you must keep moving.” — Albert Einstein",
    "“Thursday is one of the days of the week that I strive to maintain a positive outlook.” — Byron Pulsifer",
    "“Let this Thursday be filled with possibilities – be aware of the opportunities around you, don’t just go through the day, live the day with your eyes and your mind open.” ―  Catherine Pulsifer",
    "“Our lives are stories in which we write, direct and star in the leading role. Some chapters are happy while others bring lessons to learn, but we always have the power to be the heroes of our own adventures.” — Joelle Speranza",
    "“Never mind those failures till yesterday. Each new day is a sequel of a wonderful life; gifted with hopes to succeed.” ― Lailah Gifty Akita",
    "“Thursday is full of timeless thoughts and marshmallow dreams.” — Anthony T. Hincks"
];
const quotesFriday = [
    "“Oh! It’s Friday again. Share the love that was missing during the week. In a worthy moment of peace and bliss.” —S. O’Sade",
    "“Friday sees more smiles than any other day of the workweek!” —Kate Summers",
    "“Every Friday, I like to high five myself for getting through another week on little more than caffeine, willpower, and inappropriate humor.” —Nanea Hoffman",
    "“When you leave work on Friday, leave work. Don’t let technology follow you throughout your weekend (answering text messages and emails). Take a break. You will be more refreshed to begin the workweek if you have had a break.” —Catherine Pulsifer",
    "“Make Friday a day to celebrate work well done that you can be proud of knowing that you just didn’t put in time to the next paycheck.” —Byron Pulsifer",
    "“I challenge you to let every day be a Friday. Permit yourself to be happy every day.” —Joel Osteen",
    "“This Friday, finish your work and be done. Look forward to the weekend and have some fun!” —Kate Summers",
    "“Fridays are the hardest in some ways: you’re so close to freedom.” —Lauren Oliver",
    "“It’s Friday morning, mankind! Good vibe, don’t frown and let the monster see you smile!” —Napz Cherub Pellazo",
    "“Don’t worry about letting the dogs out. It’s Friday! Let them have a great weekend, too.”―Anthony T. Hincks"
];
const quotesSaturday = [
    "“Saturday is here; give it a warm welcome by allowing yourself a lovely day of rest.” – Unknown.",
    "“Sleeping in on a Saturday always feels like a bit of heaven.” – Carla Kringer.",
    "“Participate in your dreams today. There are unlimited opportunities available with this new day. Take action on those wonderful dreams you’ve had in your mind for so long.” — Steve Maraboli",
    "“The prettiest sight I know, worth all your roses and snow is the blaze of light on a Saturday night.” — E. Nesbit",
    "“Happy Saturday! Study nature, love nature, stay close to nature. It will never fail you.” — Frank Lloyd Wright",
    "“Today is a brand new day. Forget about yesterday; it does not matter. Forget about tomorrow; it will take care of itself. Concentrate on this day. Make it the best ever.” — Mary-Frances Winters",
    "“This Saturday don’t miss the sun today worrying about the rain coming tomorrow.” — Unknown"
];
const quotesSunday = [
    "Sunday is the golden clasp that binds together the volume of the week. – Henry Wadsworth Longfellow",
    "“Start each day, even a Sunday, with a positive thought and a grateful heart.”",
    "“It is time to let go of your worries, anxiety and stress in order to feel light and free. Have a happy Sunday!”",
    "“Success is not how high you have climbed, but how you make a positive difference to the world.” ― Roy T. Bennett",
    "“Wake up in the morning and get excited about the potential in front of you.”",
    "“If you’re too comfortable, it’s time to move on. Terrified of what’s next? You’re on the right track.” ― Susan Fales-Hill",
    "“If you change the way you look at things, the things you look at change.” — Wayne Dyer"
];


button.addEventListener("click", ()=> {
    if (now.getDay() === 0){
        let randomQuoteSunday = quotesSunday[Math.floor(Math.random() * quotesSunday.length)];
        par.textContent = randomQuoteSunday;
    }
    if (now.getDay() === 1){
        let randomQuoteMonday = quotesMonday[Math.floor(Math.random() * quotesMonday.length)];
        par.textContent = randomQuoteMonday;
    }
    if (now.getDay() === 2){
        let randomQuoteTuesday = quotesTuesday[Math.floor(Math.random() * quotesTuesday.length)];
        par.textContent = randomQuoteTuesday;
    }
    if (now.getDay() === 3){
        let randomQuoteWednesday = quotesWednesday[Math.floor(Math.random() * quotesWednesday.length)];
        par.textContent = randomQuoteWednesday;
    }
    if (now.getDay() === 4){
        let randomQuoteThursday = quotesThursday[Math.floor(Math.random() * quotesThursday.length)];
        par.textContent = randomQuoteThursday;
    }
    if (now.getDay() === 5){
        let randomQuoteFriday = quotesFriday[Math.floor(Math.random() * quotesFriday.length)];
        par.textContent = randomQuoteFriday;
    }
    if (now.getDay() === 6){
        let randomQuoteSaturday = quotesSaturday[Math.floor(Math.random() * quotesSaturday.length)];
        par.textContent = randomQuoteSaturday;
    }
})