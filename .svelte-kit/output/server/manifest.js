export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["clack.mp3","click.mp3","ding.wav","failed.mp3","favicon.png","robots.txt","tng_transporter9.mp3"]),
	mimeTypes: {".mp3":"audio/mpeg",".wav":"audio/wav",".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.c7da2972.js","imports":["_app/immutable/entry/start.c7da2972.js","_app/immutable/chunks/index.10276ae2.js","_app/immutable/chunks/singletons.3d8c4923.js","_app/immutable/chunks/index.c1883294.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.ebf02406.js","imports":["_app/immutable/entry/app.ebf02406.js","_app/immutable/chunks/index.10276ae2.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js')
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
