(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{86:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),o=(n(0),n(92)),i={id:"doc7",title:"Automated hyperparameter selection and optimization"},l={unversionedId:"doc7",id:"doc7",isDocsHomePage:!1,title:"Automated hyperparameter selection and optimization",description:"MMMs are likely to contain high cardinality of parameters, ie. alphas, thetas and gammas for geometric ad stock transformation. In addition, parameters dimensionality increases proportionally with the total number of marketing channels to be measured. Thus, it is extremely necessary to deal with a high dimensionality parameter space where, the greater the number of parameters, the greater the model complexity and computational requirements. In order to achieve computational efficiency while maintaining overall model accuracy, we utilize a set of techniques and algorithms:",source:"@site/docs/doc7.md",permalink:"/Robyn/docs/doc7",editUrl:"https://github.com/facebookexperimental/Robyn/docs/doc7.md",sidebar:"someSidebar",previous:{title:"Facebook Prophet - Trend, Seasonality and Holiday Effects",permalink:"/Robyn/docs/doc6"},next:{title:"Calibration using experimental results",permalink:"/Robyn/docs/doc8"}},c=[],s={rightToc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"MMMs are likely to contain high cardinality of parameters, ie. alphas, thetas and gammas for geometric ad stock transformation. In addition, parameters dimensionality increases proportionally with the total number of marketing channels to be measured. Thus, it is extremely necessary to deal with a high dimensionality parameter space where, the greater the number of parameters, the greater the model complexity and computational requirements. In order to achieve computational efficiency while maintaining overall model accuracy, we utilize a set of techniques and algorithms:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A ",Object(o.b)("strong",{parentName:"li"},"sampling method")," to search for candidates that accurately represents the multi-dimensional hyperparameter space (LHS Latinhypercube sampling)")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"#### Define latin hypercube sampling function\nf.hypSamLHS <- function(set_mediaVarName, iterN, hyperbound.global, adstock)\n\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A ",Object(o.b)("strong",{parentName:"li"},"cross-validation scheme")," that allows to have multiple dataset folds to train and validate the model. This allows using 100% of the train/validation dataset while reducing the chance of the model overfitting and defining optimal regularization lambda.")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),'### fit ridge regression with x-validation\n      cvmod <- cv.glmnet(x_train\n                         ,y_train\n                         ,family = "gaussian"\n                         ,alpha = 0 #0 for ridge regression\n                         ,lambda = lambda_seq\n                         ,lower.limits = lower.limits\n                         ,upper.limits = upper.limits\n                         ,type.measure = "mse"\n      )\n\n')),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"An ",Object(o.b)("strong",{parentName:"li"},"optimization algorithm")," (Random Search) with a score function (R2or MAPE) to minimize or maximize. This allows the model to obtain optimal results that minimize the error for example, within the hyperparameter sampled space and reduce computational effort.")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"f.mmm.RSoptim <- function(hyperbound.global = hyperbound.global\n                          ,iterN = iterN\n                          ,setCores = setCores\n                          ,epochN = Inf\n                          ,out = F\n                          ,temp.csv.path\n)\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A ",Object(o.b)("strong",{parentName:"li"},"boosting loop")," that considers previous Random Search optimization results for best hyperparameters bounds and feeds these into new Random Search optimization epochs.")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),' # hyper optimisation loop\n  optim.loop <- T\n  optim.iter <- 1\n  if (!exists("resultRS")) {\n    epoch.iter <- 1\n    optimParRS.collect <- list()\n  } else {\n    epoch.iter <- epoch.iter + 1\n    optimParRS.collect <- list(resultRS[["optimParRS"]])\n  } \n  \n  while (optim.loop & optim.iter <= epochN) {\n    \n    assign("epoch.iter", epoch.iter, envir = .GlobalEnv)\n    assign("optim.iter", optim.iter, envir = .GlobalEnv)\n    # run RS model with adapted \n    \n    sysTimeRS <- system.time({\n      resultRS <- f.mmm(hyperbound.global\n                        ,iterRS = iterN\n                        ,setCores = setCores\n                        ,out = out\n      )})\n')))}p.isMDXComponent=!0},92:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,b=m["".concat(i,".").concat(d)]||m[d]||u[d]||o;return n?a.a.createElement(b,l(l({ref:t},s),{},{components:n})):a.a.createElement(b,l({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);