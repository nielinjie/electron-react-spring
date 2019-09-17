const shell = require('shelljs')

shell.echo('##########################')
shell.echo('#     Building react       #')
shell.echo('##########################')

shell.cd('my-react-app')
const PUBLIC = '../spring/src/main/resources/public/'
shell.rm('-rf', PUBLIC);
if (shell.exec('npm run build').code !== 0) {
  shell.echo('Error: react build failed')
  shell.exit(1)
}
shell.cp('-R', 'build/', PUBLIC)
shell.cd('..')

shell.echo('##########################')
shell.echo('#     Building spring    #')
shell.echo('##########################')

shell.cd('spring')
const mvnw = process.platform === 'win32' ? 'mvnw' : './mvnw'
if (shell.exec(mvnw + ' clean package').code !== 0) {
  shell.echo('Error: spring build failed')
  shell.exit(1)
}
