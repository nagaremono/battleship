/* eslint-disable no-undef */
import { ship } from './ship-module.js';

test('created new ship', function () {
  var testShip = ship(5);
  expect(testShip).toHaveProperty('length');
  expect(testShip).toHaveProperty('hit');
  expect(testShip).toHaveProperty('placesHit');
  expect(testShip).toHaveProperty('isSunk');
});

test('marks a spot in the ship to be hit', function () {
  var testShip = ship(5);
  testShip.hit(3);
  expect(testShip.placesHit).toContain(3);
});

test('hit does not mark a spot twice', function () {
  var testShip = ship(5);
  testShip.hit(3);
  testShip.hit(3);
  expect(testShip.placesHit).toEqual([3]);
});

test('hit does not mark a spot that does not exist', function () {
  var testShip = ship(5);
  testShip.hit(6);
  expect(testShip.placesHit).toEqual([]);
});

test('isSunk return false when only 1 place is hit', function () {
  var testShip = ship(5);
  testShip.hit(3);
  expect(testShip.isSunk()).toBeFalsy();
});

test('isSunk return true if all places is hit', function () {
  var testShip = ship(5);
  testShip.hit(0);
  testShip.hit(1);
  testShip.hit(2);
  testShip.hit(3);
  testShip.hit(4);
  expect(testShip.isSunk).toBeTruthy();
});