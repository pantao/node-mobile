'use strict';

exports.isMobile = function(mobile) {
  return /^1[34578]\d{9}$/.test(mobile);
}
