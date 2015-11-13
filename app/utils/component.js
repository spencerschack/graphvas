import Ember from 'ember';
import $ from 'jquery';

const $window = $(window);

function namespaceEvents(events) {
  return events.map(event => `${event.toLowerCase()}.${this}`).join(' ');
}

export function onWindowEvent(...events) {
  const fn = events.pop();
  events = this::namespaceEvents(events);
  $window.on(events, fn);
}

export function oneWindowEvent(...events) {
  const fn = events.pop();
  events = this::namespaceEvents(events);
  $window.one(events, fn);
}

export function offWindowEvent(...events) {
  events = this::namespaceEvents(events);
  $window.off(events);
}
