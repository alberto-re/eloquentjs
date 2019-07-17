let regexp = [
  /ca[rt]/,
  /pr?op/,
  /ferr(et|y|ari)/,
  /\b.+ious\b/,
  /\s[.,:;]/,
  /\b\w{7,}\b/,
  /\b[^\We]+\b/i
]

module.exports = {
  regexp: regexp
}
