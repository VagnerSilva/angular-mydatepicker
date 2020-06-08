import { ElementRef, Renderer2, ChangeDetectorRef, AfterViewInit, OnDestroy } from "@angular/core";
import { IMyDate } from "../../interfaces/my-date.interface";
import { IMyDateRange } from "../../interfaces/my-date-range.interface";
import { IMyMonth } from "../../interfaces/my-month.interface";
import { IMyCalendarDay } from "../../interfaces/my-calendar-day.interface";
import { IMyCalendarMonth } from "../../interfaces/my-calendar-month.interface";
import { IMyCalendarYear } from "../../interfaces/my-calendar-year.interface";
import { IMyWeek } from "../../interfaces/my-week.interface";
import { IMyOptions } from "../../interfaces/my-options.interface";
import { IMySelectorPosition } from "../../interfaces/my-selector-pos.interface";
import { IMyCalendarViewChanged } from "../../interfaces/my-calendar-view-changed.interface";
import { IMyDateModel } from "../../interfaces/my-date-model.interface";
import { IMyRangeDateSelection } from "../../interfaces/my-range-date-selection.interface";
import { IMyCalendarAnimation } from "../../interfaces/my-calendar-animation.interface";
import { UtilService } from "../../services/angular-mydatepicker.util.service";
export declare class CalendarComponent implements AfterViewInit, OnDestroy {
    private elem;
    private renderer;
    private cdr;
    private utilService;
    selectorEl: ElementRef;
    styleEl: ElementRef;
    position: string;
    opts: IMyOptions;
    visibleMonth: IMyMonth;
    selectedMonth: IMyMonth;
    selectedDate: IMyDate;
    selectedDateRange: IMyDateRange;
    weekDays: Array<string>;
    dates: Array<IMyWeek>;
    months: Array<Array<IMyCalendarMonth>>;
    years: Array<Array<IMyCalendarYear>>;
    yearsDuration: string;
    dayIdx: number;
    weekDayOpts: Array<string>;
    selectMonth: boolean;
    selectYear: boolean;
    dateChanged: (dm: IMyDateModel, close: boolean) => void;
    calendarViewChanged: (cvc: IMyCalendarViewChanged) => void;
    rangeDateSelection: (rds: IMyRangeDateSelection) => void;
    closedByEsc: () => void;
    selectorPos: IMySelectorPosition;
    prevViewDisabled: boolean;
    nextViewDisabled: boolean;
    clickListener: () => void;
    constructor(elem: ElementRef, renderer: Renderer2, cdr: ChangeDetectorRef, utilService: UtilService);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    initializeComponent(opts: IMyOptions, defaultMonth: string, selectorPos: IMySelectorPosition, inputValue: string, dc: (dm: IMyDateModel, close: boolean) => void, cvc: (cvc: IMyCalendarViewChanged) => void, rds: (rds: IMyRangeDateSelection) => void, cbe: () => void): void;
    refreshComponent(opts: IMyOptions): void;
    setCalendarAnimation(calAnimation: IMyCalendarAnimation, isOpen: boolean): void;
    resetDateValue(): void;
    setDateValue(date: IMyDate): void;
    setDateRangeValue(begin: IMyDate, end: IMyDate): void;
    resetMonthYearSelect(): void;
    onMonthViewBtnClicked(): void;
    onMonthCellClicked(cell: IMyCalendarMonth): void;
    onMonthCellKeyDown(event: any): void;
    onYearViewBtnClicked(): void;
    onYearCellClicked(cell: IMyCalendarYear): void;
    onYearCellKeyDown(event: any): void;
    generateMonths(): void;
    generateYears(inputYear: number): void;
    getYearValueByRowAndCol(row: number, col: number): number;
    setCalendarVisibleMonth(): void;
    onPrevNavigateBtnClicked(): void;
    onNextNavigateBtnClicked(): void;
    setDateViewMonth(isNext: boolean): void;
    onCloseSelector(event: any): void;
    onDayCellClicked(cell: IMyCalendarDay): void;
    onDayCellKeyDown(event: any): void;
    getSourceRowAndColumnFromEvent(event: any): any;
    getTargetFocusRowAndColumn(event: any, row: number, col: number, rowCount: number, colCount: number): any;
    focusCellElement(type: string, row: number, col: number, direction: boolean, colCount: number): void;
    focusToSelector(): void;
    getCalendarElements(): any;
    selectDate(date: IMyDate): void;
    monthStartIdx(y: number, m: number): number;
    daysInMonth(m: number, y: number): number;
    daysInPrevMonth(m: number, y: number): number;
    isCurrDay(d: number, m: number, y: number, today: IMyDate): boolean;
    getToday(): IMyDate;
    getDayNumber(date: IMyDate): number;
    getWeekday(date: IMyDate): string;
    getDate(year: number, month: number, day: number): Date;
    sundayIdx(): number;
    generateCalendar(m: number, y: number, notifyChange: boolean): void;
    setDateViewHeaderBtnDisabledState(m: number, y: number): void;
    setMonthViewHeaderBtnDisabledState(y: number): void;
    setYearViewHeaderBtnDisabledState(yp: number, yn: number): void;
}