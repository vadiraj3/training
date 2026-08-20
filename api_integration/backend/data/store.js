const fs = require('fs');
const path = require('path');

const STORE_PATH = path.join(__dirname, 'store.json');

const emptyStore = {
  contacts: [],
  tasks: [],
  products: [],
  feedback: [],
  events: [],
  orders: [],
  projects: [],
  jobApplications: [],
  supportTickets: [],
  courseEnrollments: [],
};

function ensureStoreFile() {
  if (!fs.existsSync(STORE_PATH)) {
    fs.writeFileSync(STORE_PATH, JSON.stringify(emptyStore, null, 2));
  }
}

function readStore() {
  ensureStoreFile();
  const rawData = fs.readFileSync(STORE_PATH, 'utf8');
  return { ...emptyStore, ...JSON.parse(rawData) };
}

function writeStore(store) {
  fs.writeFileSync(STORE_PATH, JSON.stringify(store, null, 2));
}

function getCollection(collectionName) {
  const store = readStore();
  return store[collectionName];
}

function createRecord(collectionName, payload) {
  const store = readStore();
  const now = new Date().toISOString();
  const record = {
    id: `${collectionName}_${Date.now()}_${Math.random().toString(16).slice(2, 8)}`,
    ...payload,
    createdAt: now,
    updatedAt: now,
  };

  store[collectionName].push(record);
  writeStore(store);
  return record;
}

function updateRecord(collectionName, id, updates) {
  const store = readStore();
  const records = store[collectionName];
  const recordIndex = records.findIndex((record) => record.id === id);

  if (recordIndex === -1) {
    return null;
  }

  records[recordIndex] = {
    ...records[recordIndex],
    ...updates,
    id: records[recordIndex].id,
    createdAt: records[recordIndex].createdAt,
    updatedAt: new Date().toISOString(),
  };

  writeStore(store);
  return records[recordIndex];
}

function deleteRecord(collectionName, id) {
  const store = readStore();
  const records = store[collectionName];
  const recordIndex = records.findIndex((record) => record.id === id);

  if (recordIndex === -1) {
    return null;
  }

  const [deletedRecord] = records.splice(recordIndex, 1);
  writeStore(store);
  return deletedRecord;
}

module.exports = {
  emptyStore,
  readStore,
  getCollection,
  createRecord,
  updateRecord,
  deleteRecord,
};
