/// <reference types='reflect-metadata'/>
import Vue from 'vue'
import Component, { mixins } from 'vue-class-component'

export { Component, Vue, mixins as Mixins }
export { Serial } from './decorators/Serial'
export { UseSWR } from './decorators/UseSWR'

