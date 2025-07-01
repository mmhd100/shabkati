// data-manager.js
// =================================================
// هذا الملف مسؤول عن إدارة البيانات في localStorage
// =================================================

// إدارة المستخدمين
export function getUsers() {
  const users = localStorage.getItem('users');
  return users ? JSON.parse(users) : [];
}

export function saveUsers(users) {
  localStorage.setItem('users', JSON.stringify(users));
}

// إدارة المستخدم الحالي
export function getCurrentUser() {
  return JSON.parse(localStorage.getItem('currentUser'));
}

export function setCurrentUser(user) {
  localStorage.setItem('currentUser', JSON.stringify(user));
}

export function clearCurrentUser() {
  localStorage.removeItem('currentUser');
}

// إدارة المشاركات
export function getPosts() {
  const posts = localStorage.getItem('posts');
  return posts ? JSON.parse(posts) : [];
}

export function savePosts(posts) {
  localStorage.setItem('posts', JSON.stringify(posts));
}

// إدارة الإعجابات
export function getLikes() {
  const likes = localStorage.getItem('postLikes');
  return likes ? JSON.parse(likes) : {};
}

export function saveLikes(likes) {
  localStorage.setItem('postLikes', JSON.stringify(likes));
}

// إدارة التعليقات
export function getComments() {
  const comments = localStorage.getItem('comments');
  return comments ? JSON.parse(comments) : {};
}

export function saveComments(comments) {
  localStorage.setItem('comments', JSON.stringify(comments));
}

// إدارة الإشعارات
export function getNotifications() {
  const notifications = localStorage.getItem('notifications');
  return notifications ? JSON.parse(notifications) : [];
}

export function saveNotifications(notifications) {
  localStorage.setItem('notifications', JSON.stringify(notifications));
}