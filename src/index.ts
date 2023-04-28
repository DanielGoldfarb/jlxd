import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the jlxd extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jlxd:plugin',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension jlxd is activated!');

    let commandId = 'jlxd:Hello';
    app.commands.addCommand(commandId,
       { label: 'Hello World',
         execute: do_something
       });

    app.commands.execute(commandId);

  }
};

function do_something() {
   console.log('jlxd says "Hello World!"');
}

export default plugin;
