import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { ICommandPalette } from '@jupyterlab/apputils';
import { Widget }          from '@lumino/widgets';
import { MainAreaWidget }  from '@jupyterlab/apputils';

/**
 * Initialization data for the jlxd extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jlxd:plugin',
  autoStart: true,
  requires: [ ICommandPalette ],
  activate: _activate
};

function _activate(app: JupyterFrontEnd,
                   palette: ICommandPalette) {
   console.log('JupyterLab extension jlxd is activating!');

   let commandId = 'jlxd:Hello';
   app.commands.addCommand(commandId,
      { label: 'Hello World',
        execute: () => {
           do_something(app);
        }
      });

   palette.addItem( {
      command: commandId,
      category: 'Anything'
      });
}

class HelloWorldWidget extends Widget {
   constructor() {
      super();
      this.id = 'hello-world';
      this.title.label = 'Hello World';
      this.title.closable = true;
      this.addClass('hww');
      let body = document.createElement('body');
      let heading = document.createElement('h1');
      heading.innerText = 'Hello World from JupyterCon 2023!';
      body.appendChild(heading);
      this.node.appendChild(body);
   }
}

function do_something(app: JupyterFrontEnd) {
   let content = new HelloWorldWidget();
   let widget  = new MainAreaWidget({content});

   app.shell.add(widget,'main');
   app.shell.activateById(widget.id);
}

export default plugin;
