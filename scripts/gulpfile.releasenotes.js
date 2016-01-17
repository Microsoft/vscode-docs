/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
 
var gulp = require('gulp');
var es = require('event-stream');
var markdownIt = require('markdown-it');
var frontMatter = require('gulp-front-matter');
var rename = require('gulp-rename');
var keybindings = require('./keybindings/doc.keybindings');
var imagemin = require('gulp-imagemin');
var File = require('vinyl');
var common = require('./gulpfile.common');

var RN_SRC_ROOT = 'release-notes'; 
var DEST_ROOT = 'out/vscode-website/website'; 

var releaseNotes = [];

gulp.task('copy-releasenotes-images', function () {
	console.log('Copying over rest of release notes static content files...');

	var images = gulp.src([RN_SRC_ROOT + '/**/images/**/*.{png,PNG,jpg,JPG}'])
					 .pipe(imagemin());

	var gifs = gulp.src([RN_SRC_ROOT + '/**/images/**/*.{gif,GIF}']);

	return es.merge([images, gifs])
		.pipe(rename(function (path) { path.basename = path.dirname + '_' + path.basename; path.dirname = ''; }))
		.pipe(gulp.dest(DEST_ROOT + '/Content'));
;})

gulp.task('compile-releasenotes', ['compile-releasenotes-markdown', 'copy-releasenotes-images'], function () {
	console.log('Creating release notes index...');
	var tpl = common.swigCompiler('scripts/templates/releasenotes-nav-template.html');

	releaseNotes = releaseNotes.sort(function (a, b) {
		return parseFloat(a.Order) - parseFloat(b.Order);
	});

	var file = new File({
		path: '_UpdatesNav.cshtml',
		contents: new Buffer(tpl({ articles: releaseNotes }))
	});

	return es.readArray([file])
		.pipe(gulp.dest(DEST_ROOT + '/Views/Shared'));
});

gulp.task('compile-releasenotes-markdown', function () {
	var sources = [
		RN_SRC_ROOT + '/**/*.md'
	];

	console.log('Parsing release notes MD, applying templates...');
	return gulp.src(sources)
		.pipe(frontMatter({ property: 'data', remove: true }))
		.pipe(es.mapSync(function (file) {
			var rn = common.mapFileToArticle(file);

			if (rn.Link.toLowerCase() == 'latest') {
				rn.Link = '';
			}
			console.log("Compiling RN: " + rn.Title);
			rn = common.compileMarkdown(file, rn);

			if (rn.Order) {  // Only add articles that have the order metadata
				releaseNotes.push(rn);
			}

			// Render template
			var tpl = common.swigCompiler('scripts/templates/releasenotes-template.html');
			var result = tpl(rn);

			result = common.prependUTF8(result);
			file.contents = new Buffer(result, 'utf8');

			return file;
		}))
		.pipe(rename({ extname: '.cshtml' }))
		.pipe(gulp.dest(DEST_ROOT + '/Views/Updates'));
});
