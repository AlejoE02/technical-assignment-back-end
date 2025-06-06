import { Injectable } from '@nestjs/common';
import knexInstance from '../knex/knex';

// ! You'll need this when querying the database
// import knexInstance from '../knex/knex';

// ! Left here for ease
// export interface Venue {
//   id: number;
//   name: string;
//   country_iso2: string;
//   state: string;
//   city: string;
// }

@Injectable()
export class AppService {
  async getVenues(limit?: number): Promise<Venue[]> {
    //return 'Hello Venues!';
    const result = await knexInstance.raw(`
      SELECT
        v.id AS venue_id,
        v.name AS venue_name,
        v.country_iso2 AS country_iso2,
        v.state,
        v.city, 
        v.beds
      FROM
        venues v
      ORDER BY
        v.id
      LIMIT ${limit};
    `);
    return result[0];
  }
}
