function FilterByColor(){
    return(
        <div className="widget price mb-50">
        <h6 className="widget-title mb-30">Filter by Price</h6>
        <div className="widget-desc">
            <div className="slider-range">
                <div data-min="0" data-max="3000" data-unit="$" className="slider-range-price ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all" data-value-min="0" data-value-max="1350" data-label-result="Price:">
                    <div className="ui-slider-range ui-widget-header ui-corner-all"></div>
                    <span className="ui-slider-handle ui-state-default ui-corner-all" tabIndex="0"></span>
                    <span className="ui-slider-handle ui-state-default ui-corner-all" tabIndex="0"></span>
                </div>
                <div className="range-price">Price: 0 - 1350</div>
            </div>
        </div>
    </div>
    )
}
export default FilterByColor;