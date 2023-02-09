import { generate } from '$lib/game/world-generator';
import { expect, test } from '@playwright/test';


test("test", async () => {
    const mapOptions = {
        serverId: 'test-id',
        worldName: 'test-world',
        width: 100,
        height: 100,
        eSeed: Date.now(),
        pSeed: Date.now(),
        tSeed: Date.now()
    }

    const elevationOptions = {
        amplitude: 1.0,
        frequency: 0.04,
        octaves: 8,
        persistence: 0.5
    }

    const precipitationOptions = {
        amplitude: 1.0,
        frequency: 0.04,
        octaves: 8,
        persistence: 0.5
    }

    const temperatureOptions = {
        amplitude: 1.0,
        frequency: 0.04,
        octaves: 8,
        persistence: 0.5
    }

    const target = await generate(mapOptions, elevationOptions, precipitationOptions, temperatureOptions);

    expect(target.elevationMap).toHaveLength(10)
    expect(target.elevationMap[0]).toHaveLength(10)
    expect(target.precipitationMap).toHaveLength(10)
    expect(target.precipitationMap[0]).toHaveLength(10)
    expect(target.temperatureMap).toHaveLength(10)
    expect(target.temperatureMap[0]).toHaveLength(10)
});