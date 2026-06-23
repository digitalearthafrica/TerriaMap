declare namespace LoaderScssNamespace {
  export interface ILoaderScss {
    "loader-breathe": string;
    "loader-enter": string;
    "loader-fade-up": string;
    "loader-logo": string;
    "loader-tagline": string;
    "loader-ui": string;
    "loader-ui-hide": string;
    loaderBreathe: string;
    loaderEnter: string;
    loaderFadeUp: string;
    loaderLogo: string;
    loaderTagline: string;
    loaderUi: string;
    loaderUiHide: string;
  }
}

declare const LoaderScssModule: LoaderScssNamespace.ILoaderScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: LoaderScssNamespace.ILoaderScss;
};

export = LoaderScssModule;
