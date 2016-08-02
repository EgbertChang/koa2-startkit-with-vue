/*
 * 可将art-tempalte应用于koa2的渲染模块
 * author: waynecz
 */

const template = require('art-template');
const path = require('path');
const fs = require('fs');

template.config('openTag', '[[');
template.config('closeTag', ']]');
template.config('compress', true);

module.exports = function (app, settings) {
    if (app.context.render) {
        return;
    }

    if (!settings || !settings.root) {
        throw new Error('Root is required');
    }

    app.context.render = async function (view, data = {}, layout = 'default') {
        let vPath = path.join(settings.root, '/screen/' + view);
        let layoutPath = path.join(settings.root, '/layout/' + layout);
        let ext = '.html';
        let html = '';
        let context ='';

        let isExist = function (path) {
            return new Promise((resolve, reject) => {
                fs.exists(path + ext, (exists) => {
                    if (!exists) reject("template '" + vPath + ext + "' is not found");
                    resolve(exists)
                });
            });
        };

        try {
            var ex = await isExist(vPath);
        } catch (e) {
            html = e;
        }
        if (ex) {
            context = template(vPath, data);
            data.context = context;
            html = template(layoutPath, data)
        }

        this.body = html;
        return html;
    }
};