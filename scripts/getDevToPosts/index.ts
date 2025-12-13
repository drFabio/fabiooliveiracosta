import { ok } from 'node:assert'
import { writeFile, readFile } from 'node:fs/promises'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const POST_PER_PAGE = 30
/**
 * @see{https://developers.forem.com/api/v1#tag/articles/operation/getArticles}
 * @todo do pagination and check lates post
 */
async function getPosts() {
    ok(process.env.DEV_TO_API_KEY, ' DEV_TO_API_KEY is missing')
    const response = await fetch('https://dev.to/api/articles/me/published', {
        headers: {
            'api-key': process.env.DEV_TO_API_KEY
        }
    })
    const data = await response.json()

    const payload = { data }
    const filePath = join(__dirname, '../data/allPosts.json')

    await writeFile(filePath, JSON.stringify(payload, null, 4), 'utf-8')
    console.log(`Saved ${data.length} posts to ${filePath}`)
}

getPosts().then(() => console.log('Done')).catch((err) => console.error(err))