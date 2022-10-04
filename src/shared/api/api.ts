import axios from 'axios';
import type { iPost } from './interface/post.interface';

const blog = axios.create(
    {
        baseURL : "/api",
    }
);


/** 서버 접속 테스트 */
export const getPong = ():Promise<string> => blog.get(`/ping`).then(({data}) => data);
/** 단일 포스트 가져오기 */
export const getPost = (id:string | string[]):Promise<iPost> => blog.get(`/public/post/${id}`).then(({data}) => data);
/** 포스트 목록 가져오기 */
export const getPosts = (page: number, size: number, sort?:string[]):Promise<iPost[]> => blog.get(`public/post`, { params : {
        page, size, sort
    }
})