// Import the necessary modules from the 'vscode' package
const vscode = require("vscode");

// Function to activate the extension
function activate(context) {
    // Log a message to indicate the extension has been activated
    console.log('J-Lang is now ACTIVE');

    // Define your extension functionality here, such as registering commands or providing additional language features
    // You can use context.subscriptions to manage resources used by your extension

    // Example of registering a command:
    const disposable = vscode.commands.registerCommand('jlang.developer', function () {
        vscode.window.showInformationMessage('Extension programmed by: LillyDev, she does nott know what she is doing tho');
    });
    context.subscriptions.push(disposable);
}

// Function to deactivate the extension (optional)
function deactivate() {
    console.log('J-Lang is now INACTIVE');
}

// Export the activate and deactivate functions
module.exports = {
    activate,
    deactivate
};
