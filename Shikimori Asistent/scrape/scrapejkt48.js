const axios = require('axios');
const cheerio = require('cheerio');

async function fetchJKT48Members() {
  try {
    const response = await axios.get("https://jkt48.com/member/list?lang=id");
    const $ = cheerio.load(response.data);
    const members = [];

    $('div.col-4.col-lg-2').each((_, element) => {
      const name = $(element).find('.entry-member__name a').html()?.replace(/<br\s*\/?>/g, ' ').trim();
      const profileLink = $(element).find('.entry-member a').attr('href');
      const imageSrc = $(element).find('.entry-member img').attr('src');

      if (name && profileLink && imageSrc) {
        members.push({
          name,
          profileLink: `https://jkt48.com${profileLink}`,
          image: `https://jkt48.com${imageSrc}`
        });
      }
    });
console.log(members);
    return members;
  } catch (error) {
    console.error("Error fetching JKT48 members:", error);
    return [];
  }
}
  /*  return members;
  } catch (error) {
    console.error("Error fetching JKT48 members:", error);
    return [];
  }*/


module.exports = {
  fetchJKT48Members, // Ekspor fungsi di sini
};
