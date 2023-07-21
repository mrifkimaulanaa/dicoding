const countDown = start => {
  console.log(start);
  if (start >= 2) countDown(start - 1);
};

countDown(10);
