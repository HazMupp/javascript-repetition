// JavaScript

/*
Array
*/

// En array är...
// Ett ställe där man lagrar
// En samling med saker
// En lista

// Exempel 1
// En första array (metod 1)
// Vi initierar en array (berättar vad som finns i den samtidigt som den skapas
var weekdays = ["måndag", "tisdag", "onsdag", "torsdag", "fredag", "lördag", "söndag"];

// Hämta ur vår array på följande sätt
// Skriva ut första veckodagen
console.log("Exempel 1. Första veckodagen " + weekdays[0]);

// Spara i en variabel
var favoriteDay = weekdays[4];
console.log("Exempel 1. Första veckodagen " + favoriteDay);



var months = [];
months[0] = "januari";
months[1] = "februari";
months[2] = "mars";
months[3] = "april";
months[4] = "maj";
months[5] = "juni";
months[6] = "juli";
months[7] = "augusti";
months[8] = "september";
months[9] = "oktober";
months[10] = "november";
months[11] = "december";


// Exempel 3
// En array kan innehålla flera olika typer (till skillnad från java)
var favoriteThings = [1997, "Någonting", true, "IT", 1337];

// Exempel 4
// Hur mycket finns det i en array
console.log("Exempel 4: Jag har " + favoriteThings.lenght + " favoritsaker");

// Exempel 5
// Lägg till något på slutet av en array
favoriteThings.push("Teaching");

// Exempel 6
// Visa en array
console.log(favoriteThings);

// Hur loopar man igenom en array? Kolla upp for-loop, for-in-loop samt for-of-loop

// Sammanfattning: En samling saker (kan vara olika typer) som vi kommer ¨t genom index(sakens position)

/*
Object
*/

// En sak med egenskaper

// Exempel 7
// Skapa ett object i JavaScript (metod 1)
var car = {color: "ful", hasAWheel: true, numberOfSeats: 4, }; 
// Ett objekt består av egenskaper, varje egenskap består av ett attribut (key) och ett värde(value)
// Color är ett attribut (key)
// "ful" är värdet

// Annat exempel
var computer = {color: "gray", brand: "Mac"};

// Metod 2
var student = {};
student.name = "Anton";
student.favoriteTeam = "AIK";

// Metod 3
var anotherStudent = new Object();
anotherStudent["name"] = "Oskar";
anotherStudent[favoriteTeam] = "HIF";

// Hur hämtar vi något från ett objekt?
console.log("Den första studenten heter " + student.name); // Punktnotation()
console.log("Den andra studenten heter " + anotherStudent["name"]);


// Objekt i arrayer
var students = [student, anotherStudent];
// Hämta namnet på första studenten i arrayen
console.log("Första studenten i array: " + students[0].name);
console.log("Andra studenten i array: " + students[1].name);

// Array i array
var favoriteGames = [["Super Mario bros 1", "Duck hunt"], ["Wii sports", "zelda"]];
// Skriv ut första spelet i första listan
console.log("Andra spelet i första listan " + favoriteGames[0][1]);

// Array i objekt
var superMario64 = {title: "Super mario 64", countries: ["Sverige", "USA"], characters: ["Mario", "Toad", "Peach"]};
// Hämta första karaktären
console.log("Första karaktären är " + superMario64.characters[0]);
console.log("Andra landet är " + superMario64["countries"][1]);

// Objekt i objekt
var club = {name: "PSG", playedInChampionsLeague: true, founded: "2013"
var soccerPlayer = {name: "Zlatan", originalClub: {name: "Malmö FF", playedInChampionsLeague: true, founded:1901}, currentclub: club};
console.log("Året då Zlatans originalklubb startades " + soccerPlayer.originalClub.founded);
console.log("Zlatans originalklubb heter " + soccerPlayer["originalClub"]["founded"]);
