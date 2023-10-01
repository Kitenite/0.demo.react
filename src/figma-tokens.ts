export class Tokens {
    static Mode1 = class {
        static Color = class  {
            public static readonly BUTTON_LABEL_PRIMARY = '#000000';
            public static readonly COLOR_VIOLET = '#C7B9FF';
            public static readonly BUTTON_BACKGROUND_PRIMARY = '#C7B9FF';
            public static readonly COLOR_BLACK = '#000000';
            public static readonly BUTTON_OUTLINE_PRIMARY = '#000000';
        }
        static Number = class  {
            public static readonly RADIUS_SM = 8;
            public static readonly SPACING_LG = 24;
            public static readonly SPACING_SM = 12;
        }
    }
}
export class ColorsExample {
    static Light = class {
        public static readonly COLOR_BORDER_PRIMARY = '#000000';
        static Input = class  {
            public static readonly SELECTED = '#FF8577';
            public static readonly FOREGROUND_COLOR = '#000000';
            public static readonly BORDER_COLOR = '#000000';
            public static readonly BACKGROUND_COLOR = '#FFFFFF';
        }
        public static readonly COLOR_SURFACE = '#FFFFFF';
        public static readonly COLOR_ACCENT = '#F769C7';
        static Button = class  {
            public static readonly FOREGROUND_PRIMARY = '#000000';
            public static readonly BORDER_PRIMARY = '#000000';
            public static readonly BACKGROUND_PRIMARY = '#3CFF8A';
        }
        public static readonly COLOR_TEXT_PRIMARY = '#000000';
        public static readonly COLOR_SURFACE_FAINT = '#FAFAFA';
        public static readonly COLOR_BRAND = '#3CFF8A';
        public static readonly COLOR_FEATURE = '#FF8577';
    }
    static Dark = class {
        public static readonly COLOR_BORDER_PRIMARY = '#757575';
        static Input = class  {
            public static readonly SELECTED = '#FF8577';
            public static readonly FOREGROUND_COLOR = '#FFFFFF';
            public static readonly BORDER_COLOR = '#757575';
            public static readonly BACKGROUND_COLOR = '#000000';
        }
        public static readonly COLOR_SURFACE = '#000000';
        public static readonly COLOR_ACCENT = '#699BF7';
        static Button = class  {
            public static readonly FOREGROUND_PRIMARY = '#FFFFFF';
            public static readonly BORDER_PRIMARY = '#8061FF';
            public static readonly BACKGROUND_PRIMARY = '#8061FF';
        }
        public static readonly COLOR_TEXT_PRIMARY = '#FFFFFF';
        public static readonly COLOR_SURFACE_FAINT = '#2A2A2A';
        public static readonly COLOR_BRAND = '#8061FF';
        public static readonly COLOR_FEATURE = '#FF8577';
    }
}
export class TextExample {
    static English = class {
        public static readonly ITEMADDED = true;
    }
    static German = class {
        public static readonly ITEMADDED = false;
    }
    static Japanese = class {
        public static readonly ITEMADDED = false;
    }
}
export class SpacingExample {
    static Standard = class {
        public static readonly SPACING_XL = 32;
        public static readonly SPACING_LG = 24;
        public static readonly SPACING_SM = 12;
        public static readonly SPACING_MD = 16;
        public static readonly SPACING_XS = 8;
    }
    static Expanded = class {
        public static readonly SPACING_XL = 64;
        public static readonly SPACING_LG = 48;
        public static readonly SPACING_SM = 24;
        public static readonly SPACING_MD = 32;
        public static readonly SPACING_XS = 16;
    }
    static Condensed = class {
        public static readonly SPACING_XL = 16;
        public static readonly SPACING_LG = 12;
        public static readonly SPACING_SM = 4;
        public static readonly SPACING_MD = 8;
        public static readonly SPACING_XS = 2;
    }
}
export class Themes {
    static Light = class {
        public static readonly COLOR_BORDER_PRIMARY = '#000000';
        public static readonly COLOR_SURFACE = '#FFFFFF';
        static Button = class  {
            public static readonly FOREGROUND_PRIMARY = '#000000';
            public static readonly BORDER_PRIMARY = '#000000';
            public static readonly BACKGROUND_PRIMARY = '#C7B9FF';
        }
        public static readonly COLOR_TEXT_PRIMARY = '#000000';
        public static readonly COLOR_BRAND = '#C7B9FF';
    }
    static Dark = class {
        public static readonly COLOR_BORDER_PRIMARY = '#757575';
        public static readonly COLOR_SURFACE = '#000000';
        static Button = class  {
            public static readonly FOREGROUND_PRIMARY = '#FFFFFF';
            public static readonly BORDER_PRIMARY = '#757575';
            public static readonly BACKGROUND_PRIMARY = '#8061FF';
        }
        public static readonly COLOR_TEXT_PRIMARY = '#FFFFFF';
        public static readonly COLOR_BRAND = '#8061FF';
    }
}
