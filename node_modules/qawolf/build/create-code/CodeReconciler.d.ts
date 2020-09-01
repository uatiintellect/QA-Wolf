import { VirtualCode } from '../build-code/VirtualCode';
declare type ReconcileOptions = {
    actualCode: string;
    virtualCode: VirtualCode;
};
export declare class CodeReconciler {
    _virtualCode: VirtualCode;
    _insertNewLines({ actualCode, virtualCode }: ReconcileOptions): string;
    _updateLastLine({ actualCode, virtualCode }: ReconcileOptions): string;
    hasChanges(virtualCode: VirtualCode): boolean;
    reconcile({ actualCode, virtualCode }: ReconcileOptions): string;
    update(virtualCode: VirtualCode): void;
}
export {};
