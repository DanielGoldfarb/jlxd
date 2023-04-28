import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { ICommandPalette } from '@jupyterlab/apputils';

/**
 * Initialization data for the jlxd extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jlxd:plugin',
  autoStart: true,
  requires: [ ICommandPalette ],
  activate: (app: JupyterFrontEnd,
             palette: ICommandPalette) => {
    console.log('JupyterLab extension jlxd is activated!');

    let commandId = 'jlxd:Hello';
    app.commands.addCommand(commandId,
       { label: 'Hello World',
         execute: do_something
       });

    palette.addItem( {
       command: commandId,
       category: 'Anything'
       });
  }
};

function do_something() {
   console.log('jlxd says "Hello World!"');
}

export default plugin;
