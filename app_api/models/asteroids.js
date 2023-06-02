const mongoose = require('mongoose');

const detailsSchema = new mongoose.Schema({
    links: {
        self: String
    },
    id: String,
    neo_reference_id: String,
    name: String,
    nasa_jpl_url: String,
    absolute_magnitude_h: Number,
    estimated_diameter: {
        kilometers: {
            estimated_diameter_min: Number,
            estimated_diameter_max: Number
        },
        meters: {
            estimated_diameter_min: Number,
            estimated_diameter_max: Number
        },
        miles: {
            estimated_diameter_min: Number,
            estimated_diameter_max: Number
        },
        feet: {
            estimated_diameter_min: Number,
            estimated_diameter_max: Number
        }
    },
    is_potentially_hazardous_asteroid: Boolean,
    close_approach_data: [
        {
            close_approach_date: String,
            close_approach_date_full: String,
            epoch_date_close_approach: Number,
            relative_velocity: {
                kilometers_per_second: String,
                kilometers_per_hour: String,
                miles_per_hour: String
            },
            miss_distance: {
                astronomical: String,
                lunar: String,
                kilometers: String,
                miles: String
            },
            orbiting_body: String
        }
    ],
    is_sentry_object: Boolean
}
);

const asteroidSchema = new mongoose.Schema({
    element_count: Number,
    links: {
        next: String,
        previous: String,
        self: String
    },
    near_earth_objects: {
        [mongoose.Schema.Types.String]: {type: [detailsSchema], alias: 'date1'}
    }
}, { strict: false });


mongoose.model('Asteroids', asteroidSchema);