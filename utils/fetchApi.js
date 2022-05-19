import axios from 'axios'

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const featchApi = async (url) => {
	const { data } = await axios.get((url), {
		headers: {
			'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
    	'X-RapidAPI-Key': '5056915b8cmshecd1fc6b86ae67ap1b81c5jsn310446140eef'
		}
	})

	return data
}