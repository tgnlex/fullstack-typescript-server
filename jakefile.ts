import {task, desc} from 'jake';

task('menu', function () {
  console.log('###############')
  console.log('#####TASK######')
  console.log('#####MENU######')
  console.log('###############')
  console.log('[clean:css]')
  console.log('[clean:js]')
  console.log('[clean:img]')
  console.log('[clean:all]')
})
/* CLEAN */
  desc('Clean CSS');
  task('clean:css', [], function () {
    jake.rmRf('public/css');
    jake.mkdirP('public/css');
    console.log('Cleaned public/css');
  });

  desc('Clean JS');
w  task('clean:js', [], function () {
    jake.rmRf('public/js');
    jake.mkdirP('public/js');
    console.log('Cleaned public/js');
  });

  desc('Clean Assets');
  task('clean:assets', [], function () {
    jake.rmRf('public/assets');
    jake.mkdirP('public/assets');
    console.log('Cleaned public/assets');
  });

  desc('Cleaning everything');
  task('clean', ['clean:css','clean:js','clean:assets'], function () {
    console.log('Cleaned everything');
  });
});
/*   COPY   */
desc('Copy assets');
task('copy:assets', ['clean:img'], function () {
    jake.cpR('./src/frontend/assets/*', 'public/assets/*');
    console.log('Images copied');
  
});
/* Compile */
desc('Sass compile')
task('sass', ['clean:css'], function() {
   jake.exec('sass ./src/style/*', './static/css/*', function () {
      console.log('Built sass')
      complete();
   }, { printStdout: true });
})
