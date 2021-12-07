export const DBConfig = {
    name: 'citiesDB',
    version: 1,
    objectStoresMeta: [
        {
            store: 'cities',
            storeConfig: { keyPath: 'id', autoIncrement: true },
            storeSchema: [
                {name: 'cityName', keyPath: 'cityName', option: {unique: true}},
                {name: 'lat', keyPath: 'lat', option: {unique: true}},
                {name: 'lon', keyPath: 'lon', option: {unique: true}}
            ]
        }
    ]
};