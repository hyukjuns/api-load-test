import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  stages: [
    { duration: '10s', target: 10 }, // 사용자 증가
    { duration: '10s', target: 10 }, // 유지
    { duration: '10s', target: 20 },
    { duration: '20s', target: 20 },
    { duration: '10s', target: 0 },
  ]
};

export default function () {
  http.get('https://test.k6.io');
  sleep(1)
}