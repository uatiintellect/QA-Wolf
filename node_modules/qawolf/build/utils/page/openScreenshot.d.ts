import { ChildProcess } from 'child_process';
import { Page } from 'playwright';
export declare const openScreenshot: (page: Page) => Promise<ChildProcess>;
