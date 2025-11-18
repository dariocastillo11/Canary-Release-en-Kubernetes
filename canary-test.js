import http from 'k6/http';
import { sleep, check } from 'k6';
// Configuraciones para cada tipo de prueba (
// Smoke test: validación rápida, pocos usuarios, corta duración
const smoke = { vus: 10, duration: '3s' };
// Average load: día promedio, subida, sostenimiento y caída
const average = {
    stages: [
        { duration: '20s', target: 300 },
        { duration: '1m', target: 300 },
        { duration: '40s', target: 0 }
    ]
};
// Stress: 10 veces el promedio, rampas rápidas
const stress = {
    stages: [
        { duration: '20s', target: 3000 },
        { duration: '1m', target: 3000 },
        { duration: '40s', target: 0 }
    ]
};
// Soak: usuarios sostenidos, duración máxima permitida
const soak = { vus: 1000, duration: '5m' };
// Breakpoint: rampas lentas hasta el máximo permitido
const breakpoint = {
    stages: [
        { duration: '24s', target: 100 },
        { duration: '24s', target: 1000 },
        { duration: '24s', target: 3500 },
        { duration: '24s', target: 7000 },
        { duration: '24s', target: 0 }
    ]
};
// Spike: pico alto y rápido, luego baja
const spike = {
    stages: [
        { duration: '1s', target: 10 },
        { duration: '5s', target: 7000 },
        { duration: '1s', target: 10 }
    ]
};
// Elige el tipo de prueba aquí cambiando el nombre
export let options = soak; // smoke, spike, average, stress, soak, breakpoint
export default function () {
    let res = http.get('http://canary.local/');
    check(res, {
        'status was 200': (r) => r && r.status === 200,
        'body contains v1 or v2': (r) => r && (r.body.includes('v1') || r.body.includes('v2')),
    });
    sleep(1);
}
