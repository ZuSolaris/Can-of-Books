'use strict';
const mongoose = require('mongoose');

require('dotenv').config();
mongoose.connect(process.env.DB_URL);
const Book = require('./models/book.js');
async function seed(){
  await Book.create({
title: `Howl's Moving Castle`,
description: `Sophie has the great misfortune of being the eldest of three daughters, destined to fail miserably should she ever leave home to seek her fate. But when she unwittingly attracts the ire of the Witch of the Waste, Sophie finds herself under a horrid spell that transforms her into an old lady. Her only chance at breaking it lies in the ever-moving castle in the hills: the Wizard Howl's castle.`,
won_award: true,
awards: 'Osella Awards for Technical Achievement,Best Japanese Movie Overall,Excellence Prize Animation, Audience Award, Audience Award,Best Director, Best Voice Actor/Actress, Best Music, International Gold Reel Award, RIFF Audience Award, Best Script'
  })
  await Book.create({
    title: 'The Great Gatsby',
    Description: 'The Great Gatsby is a 1925 novel by American writer F. Scott Fitzgerald. Set in the Jazz Age on Long Island, near New York City, the novel depicts first-person narrator Nick Carraways interactions with mysterious millionaire Jay Gatsby and Gatsbys obsession to reunite with his former lover, Daisy Buchanan.',
    won_award: false
  })
  await Book.create({
    title: 'Fahrenheit 451',
    description: `Fahrenheit 451 is a 1953 dystopian novel by American writer Ray Bradbury. Often regarded as one of his best works,[4] Fahrenheit 451 presents an American society where books have been outlawed and "firemen" burn any that are found.[5] The novel follows Guy Montag, a fireman who becomes disillusioned with his role of censoring literature and destroying knowledge, eventually quitting his job and committing himself to the preservation of literary and cultural writings.

    Fahrenheit 451 was written by Bradbury during the Second Red Scare and the McCarthy era, who was inspired by the book burnings in Nazi Germany and by ideological repression in the Soviet Union.[6] Bradbury's motivation for writing the novel has changed multiple times. In a 1956 radio interview, Bradbury said that he wrote the book because of his concerns about the threat of burning books in the United States.[7] In later years, he described the book as a commentary on how mass media reduces interest in reading literature.[8] In a 1994 interview, Bradbury cited political correctness as an allegory for the censorship in the book, calling it "the real enemy these days" and "thought control and freedom of speech control.”`,
    won_award: true,
    awards: 'Prometheus Hall of Fame Award, Retro Hugo Award for Best Novel'
  })
  mongoose.disconnect();
}
seed();