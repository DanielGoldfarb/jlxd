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
  }
};

export default plugin;
