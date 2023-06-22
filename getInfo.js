const axios = require('axios');
const cheerio = require('cheerio');

const cheerioObj = async (username) => {
    const response = await axios.get(`https://leetcode.com/${username}/`); // Replace with the desired website URL
    const html = response.data;
    const $ = cheerio.load(html);
    return $;
}

const totalSolved = async (username) => {
    const $ = await cheerioObj(username);
    const totalSolved = $('.font-medium.text-label-1.dark\\:text-dark-label-1.text-\\[24px\\]')[0].children[0].data;
    return totalSolved;
}

const rank = async (username) => {
    const $ = await cheerioObj(username);
    const rank = $('.ttext-label-1.dark\\:text-dark-label-1.font-medium')[0].children[0].data;
    return rank;
}

const name = async (username) => {
    const $ = await cheerioObj(username);
    const name = $('.text-label-1.dark\\:text-dark-label-1.break-all.text-base.font-semibold')[0].children[0].data;
    return name;
}


const totalActiveDays = async (username) => {
    const $ = await cheerioObj(username);
    const streak = $('.font-medium.text-label-2.dark\\:text-dark-label-2');
    const totalActiveDays = streak[3].children[0].data
    return totalActiveDays;
}

const maxStreak = async (username) => {
    const $ = await cheerioObj(username);
    const streak = $('.font-medium.text-label-2.dark\\:text-dark-label-2');
    const maxStreak = streak[4].children[0].data;
    return maxStreak;
}
const hardQuestion = async (username) => {
    const $ = await cheerioObj(username);
    const categoryQuestion = $('.mr-\\[5px\\].text-base.font-medium.leading-\\[20px\\].text-label-1.dark\\:text-dark-label-1');
    const hardQuestion = categoryQuestion[2].children[0].data;
    return hardQuestion;
}
const easyQuestion = async (username) => {
    const $ = await cheerioObj(username);
    const categoryQuestion = $('.mr-\\[5px\\].text-base.font-medium.leading-\\[20px\\].text-label-1.dark\\:text-dark-label-1');
    const hardQuestion = categoryQuestion[0].children[0].data;
    return hardQuestion;
}
const mediumQuestion = async (username) => {
    const $ = await cheerioObj(username);
    const categoryQuestion = $('.mr-\\[5px\\].text-base.font-medium.leading-\\[20px\\].text-label-1.dark\\:text-dark-label-1');
    const hardQuestion = categoryQuestion[1].children[0].data;
    return hardQuestion;
}
const print = async () => {
    const res = await mediumQuestion('mujtabah258');
    console.log(res);
}

module.exports = { totalSolved, rank, name, totalActiveDays, maxStreak, hardQuestion, easyQuestion, mediumQuestion };