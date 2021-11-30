import { readdirSync } from 'fs';
import { join } from 'path';

const POST_PATH = join(process.cwd(), 'posts');

export const getAllPosts = () => readdirSync(POST_PATH);
