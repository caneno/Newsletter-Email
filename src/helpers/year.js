module.exports = function() {
    const month = new Date().getMonth();
    const day = new Date().getDay();
    const year = new Date().getFullYear();
    return `{ ${month}/${day}/${year} }`;
  }