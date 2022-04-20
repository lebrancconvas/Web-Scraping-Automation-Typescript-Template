import cheerio from 'cheerio';
import axios from 'axios';

const MainCheerio = async() =>
{
	const link: string = "";
	const { data } = await axios.get(link);
	const $ = cheerio.load(data);
}

export default MainCheerio;