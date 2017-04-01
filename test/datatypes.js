const tape      = require('tape');
const core      = require('../index');
const datatypes = [{}, [], true, 1];

tape('Datatypes invalid throws: environment', test => {
  datatypes
    .forEach(datatype => {
      test.throws(() => { core(datatype) }, /Environment id needs to be a string containing only letters and or numbers/);
    });
  test.end();
});

tape('Datatypes invalid throws: extension', test => {
  datatypes
    .forEach(datatype => {
      test.throws(() => {
        const road = core('client');
        road.extension(datatype, 'extension');
      }, /Extension id needs to be a string containing only letters and or numbers/);
    });
  test.end();
});

tape('Datatypes invalid throws: middleware', test => {
  datatypes
    .forEach(datatype => {
      test.throws(() => {
        const road = core('client');
        road.middleware(datatype);
      }, /Provided middleware needs to be a non empty object/);
    });
  test.end();
});

tape('Datatypes invalid throws: where', test => {
  datatypes
    .forEach(datatype => {
      test.throws(() => {
        const road = core('client');
        road.where(datatype);
      }, /Environment id needs to be a string containing only letters and or numbers/);
    });
  test.end();
});

tape('Datatypes invalid throws: match', test => {
  datatypes
    .forEach(datatype => {
      test.throws(() => {
        const road = core('client');
        road.match(datatype, 'matchId');
      }, /Match id needs to be a string containing only letters and or numbers/);
    });
  datatypes
    .forEach(datatype => {
      test.throws(() => {
        const road = core('client');
        road.match('matchId', datatype);
      }, /All match values need to be strings/);
    });
  test.end();
});

tape('Datatypes invalid throws: run', test => {
  datatypes
    .forEach(datatype => {
      test.throws(() => {
        const road = core('client');
        road.run(datatype, 'middlewareId');
      }, /Match id needs to be a string containing only letters, numbers, - or */);
    });
  datatypes
    .forEach(datatype => {
      test.throws(() => {
        const road = core('client');
        road.run('matchId', datatype);
      }, /Middleware id needs to be a string containing only letters and or numbers/);
    });
  test.end();
});

tape('Datatypes invalid throws: runCustom', test => {
  datatypes
    .forEach(datatype => {
      test.throws(() => {
        const road = core('client');
        road.runCustom(datatype, 'middlewareId', 'updateType');
      }, /Match id needs to be a string containing only letters, numbers, - or */);
    });
  datatypes
    .forEach(datatype => {
      test.throws(() => {
        const road = core('client');
        road.runCustom('matchId', datatype, 'updateType');
      }, /Middleware id needs to be a string containing only letters and or numbers/);
    });
  datatypes
    .forEach(datatype => {
      test.throws(() => {
        const road = core('client');
        road.runCustom('matchId', 'middlewareId', datatype);
      }, /Update type needs to be a string containing only letters and or numbers/);
    });
  test.end();
});

tape('Datatypes invalid throws: once', test => {
  datatypes
    .forEach(datatype => {
      test.throws(() => {
        const road = core('client');
        road.once(datatype, 'middlewareId');
      }, /Match id needs to be a string containing only letters, numbers, - or */);
    });
  datatypes
    .forEach(datatype => {
      test.throws(() => {
        const road = core('client');
        road.once('matchId', datatype);
      }, /Middleware id needs to be a string containing only letters and or numbers/);
    });
  test.end();
});

tape('Datatypes invalid throws: error', test => {
  datatypes
    .forEach(datatype => {
      test.throws(() => {
        const road = core('client');
        road.error(datatype);
      }, /Middleware id needs to be a string containing only letters and or numbers/);
    });
  test.end();
});

tape('Datatypes invalid throws: noMatch', test => {
  datatypes
    .forEach(datatype => {
      test.throws(() => {
        const road = core('client');
        road.noMatch(datatype);
      }, /Middleware id needs to be a string containing only letters and or numbers/);
    });
  test.end();
});

tape('Datatypes invalid throws: done', test => {
  datatypes
    .forEach(datatype => {
      test.throws(() => {
        const road = core('client');
        road.done(datatype);
      }, /Middleware id needs to be a string containing only letters and or numbers/);
    });
  test.end();
});
