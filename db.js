import pg from 'pg'
const Pool = pg.Pool;
export const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'Project',
    password: 'Srajan@12',
    port: 5433
});
