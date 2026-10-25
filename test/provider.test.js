const test = require('node:test');
const assert = require('node:assert/strict');
const provider = require('../providers');
test('accepts clearly adult-rated metadata',()=>{assert.equal(provider.isAllowedRecord({title:'Adult title',rating:'18+'}),true)});
test('rejects unrated and ambiguous records',()=>{assert.equal(provider.isAllowedRecord({title:'Adult title'}),false);assert.equal(provider.isAllowedRecord({title:'Loli adult title',rating:'18+'}),false)});
test('normalizes metadata and omits stream URLs',()=>{const item=provider.normalizeCatalogRecord({id:4,title:'Sample',rating:'adult',genres:['Drama'],year:2024,stream:'https://example.invalid/video'});assert.deepEqual(item,{id:'4',title:'Sample',poster:undefined,description:undefined,genres:['Drama'],year:2024});});
test('filters catalog records fail-closed',()=>{assert.equal(provider.filterCatalog([{id:1,title:'Good',rating:'18+'},{id:2,title:'Unknown'}]).length,1)});
