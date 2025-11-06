import http from 'k6/http';
import { sleep, check } from 'k6';

export let options = {
    vus: 10,          // 10 usuarios virtuales
    duration: '30s',  // 30 segundos
};

export default function () {
    let res = http.get('http://canary.local/');
    check(res, {
        'status was 200': (r) => r.status === 200,
        'body contains v1 or v2': (r) => r.body.includes('v1') || r.body.includes('v2'),
    });
    sleep(1);
}
