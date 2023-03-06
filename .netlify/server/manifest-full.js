export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["clack.mp3","click.mp3","ding.wav","failed.mp3","favicon.png","robots.txt","tng_transporter9.mp3"]),
	mimeTypes: {".mp3":"audio/mpeg",".wav":"audio/wav",".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.cc2c3f39.js","imports":["_app/immutable/entry/start.cc2c3f39.js","_app/immutable/chunks/index.858362d9.js","_app/immutable/chunks/singletons.4a3b87fb.js","_app/immutable/chunks/index.7b606f8f.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.847dbddc.js","imports":["_app/immutable/entry/app.847dbddc.js","_app/immutable/chunks/index.858362d9.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
