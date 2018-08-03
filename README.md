Before you dive into anything, see for yourself how easy you can setup a full workflow framework for your `development` and `deployment` for your real world project.

Step 0: make sure you have node npm and git installed locally
```
use homebrew

Step 1: Clone repo and checkout correct branch
```
git clone https://github.com/sjafri5/react-redux-boilerplate.git
cd react-redux-boilerplate

git checkout --track origin/dad-app

```

Step 2: Install

```
npm install
```

Step 3: Start

```
npm run dev
```

After you check out the repo, I will usually do the following :

0. Go to your project root in your host machine  ( e.g. your Mac )
1. Run `npm run dev` in your terminal ( wait until the dashboard show complete status )
2. Go to your browser and go to `localhost:8080`
3. Make code changes
4. If there are compilation errors, you will see it in the terminal dashboard
5. Watch your code changes reflect on browser without refreshing
6. Repeat your development steps














## Folder Structure

The entry point of your application is `src/js/routes`, it's basically a mapping between your `views` to a `route`.

All your javascript code lives in folder `src/js`

```
  -- src/
    -- js/
      -- common/
        -- components/   --> all share components here
        -- types/        --> all flow types are here
      -- redux/
        -- modules/      --> all redux code
        -- saga/         --> all redux-saga code
        -- selectors/    --> all reselect code
      -- utility/        --> all non JSX utility
      -- views/          --> all JSX code hook up with Route ( HoC ) or page specific components
    -- style/            --> all global styles, layout, config
    -- assets/           --> all static assets ( image, fonts ... etc )
      -- template/       --> you probably won't touch this unless you want to create new template

```

* For `config/` and `bin/` folder, it is covered at [Configuration](#configuration) section

* For `__tests__/` folder, it is covered at [Writing Unit Test](#writing-unit-test) section

* For our Redux coding style, we are using [Ducks](https://github.com/erikras/ducks-modular-redux) standards

* For how to write code in ES6 /React / Redux / POSTCSS  ... etc, please feel free to look at our simple example code.  And if you have question or want to study future, please checkout the [Knowledge Base Reading](#knowledge-base-reading) section, which covers everything we used in this boilerplate.

**NOTE: When you import resources, please make sure you have the right path**


