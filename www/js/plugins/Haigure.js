/*:
 * @author 1d51
 * @version 1.0.1
 * @plugindesc HAIGURE~! ♥ HAIGURE~! ♥ HAIGURE~! ♥ HAIGURE~! ♥ HAIGURE~! ♥ HAIGURE~! ♥
 */

var Imported = Imported || {};
Imported.Haigure = true;

var Haigure = Haigure || {};
Haigure.Holders = Haigure.Holders || {};

(async function ($) {
    $.Holders.drawText = Window_Base.prototype.drawText;
    Window_Base.prototype.drawText = function(text, x, y, maxWidth, align) {
        if ($gameParty.members().every(a => a.isStateAffected(77) || a.isStateAffected(148))) {
            return $.Holders.drawText.call(this, "Haigure", x, y, maxWidth, align);
        } else {
            return $.Holders.drawText.call(this, text, x, y, maxWidth, align);
        }
    };

    $.Holders.drawActorName = Window_Base.prototype.drawActorName;
    Window_Base.prototype.drawActorName = function(actor, x, y, width) {
        if (actor.isStateAffected(77) || actor.isStateAffected(148)) {
            width = width || 168;
            this.changeTextColor(this.hpColor(actor));
            this.drawText("Haigure", x, y, width);
        } else {
            $.Holders.drawActorName.call(this, actor, x, y, width);
        }
    };

    $.Holders.drawActorClass = Window_Base.prototype.drawActorClass;
    Window_Base.prototype.drawActorClass = function(actor, x, y, width) {
        if (actor.isStateAffected(77) || actor.isStateAffected(148)) {
            width = width || 168;
            this.resetTextColor();
            this.drawText("Haigure", x, y, width);
        } else {
            $.Holders.drawActorClass.call(this, actor, x, y, width);
        }
    };

    $.Holders.drawActorNickname = Window_Base.prototype.drawActorNickname;
    Window_Base.prototype.drawActorNickname = function(actor, x, y, width) {
        if (actor.isStateAffected(77) || actor.isStateAffected(148)) {
            width = width || 270;
            this.resetTextColor();
            this.drawText("Haigure", x, y, width);
        } else {
            $.Holders.drawActorNickname.call(this, actor, x, y, width);
        }
    };

    $.Holders.drawActorLevel = Window_Base.prototype.drawActorLevel;
    Window_Base.prototype.drawActorLevel = function(actor, x, y) {
        if (actor.isStateAffected(77) || actor.isStateAffected(148)) {
            this.changeTextColor(this.systemColor());
            this.drawText("Haigure", x, y, 48);
            this.resetTextColor();
            this.drawText("Haigure", x + 84, y, 36, 'right');
        } else {
            $.Holders.drawActorLevel.call(this, actor, x, y);
        }
    };

    $.Holders.drawActorHp = Window_Base.prototype.drawActorHp;
    Window_Base.prototype.drawActorHp = function(actor, x, y, width) {
        if (actor.isStateAffected(77) || actor.isStateAffected(148)) {
            width = width || 186;
            var color1 = this.hpGaugeColor1();
            var color2 = this.hpGaugeColor2();
            this.drawGauge(x, y, width, actor.hpRate(), color1, color2);
            this.changeTextColor(this.systemColor());
            this.drawText("Haigure", x, y, 44);

            var valueWidth = this.textWidth("Haigure");
            var x1 = x + width - valueWidth;
            this.changeTextColor(this.hpColor(actor));
            this.drawText("Haigure", x1, y, valueWidth, 'right');
        } else {
            $.Holders.drawActorHp.call(this, actor, x, y, width);
        }
    };

    $.Holders.drawActorMp = Window_Base.prototype.drawActorMp;
    Window_Base.prototype.drawActorMp = function(actor, x, y, width) {
        if (actor.isStateAffected(77) || actor.isStateAffected(148)) {
            width = width || 186;
            var color1 = this.mpGaugeColor1();
            var color2 = this.mpGaugeColor2();
            this.drawGauge(x, y, width, actor.mpRate(), color1, color2);
            this.changeTextColor(this.systemColor());
            this.drawText("Haigure", x, y, 44);

            var valueWidth = this.textWidth("Haigure");
            var x1 = x + width - valueWidth;
            this.changeTextColor(this.mpColor(actor));
            this.drawText("Haigure", x1, y, valueWidth, 'right');
        } else {
            $.Holders.drawActorMp.call(this, actor, x, y, width);
        }
    };

    $.Holders.drawActorTp = Window_Base.prototype.drawActorTp;
    Window_Base.prototype.drawActorTp = function(actor, x, y, width) {
        if (actor.isStateAffected(77) || actor.isStateAffected(148)) {
            width = width || 96;
            var color1 = this.tpGaugeColor1();
            var color2 = this.tpGaugeColor2();
            this.drawGauge(x, y, width, actor.tpRate(), color1, color2);
            this.changeTextColor(this.systemColor());
            this.drawText("Haigure", x, y, 44);
            this.changeTextColor(this.tpColor(actor));
            this.drawText("Haigure", x + width - 64, y, 64, 'right');
        } else {
            $.Holders.drawActorTp.call(this, actor, x, y, width);
        }
    };

    $.Holders.drawActorJp = Window_Base.prototype.drawActorJp;
    Window_Base.prototype.drawActorJp = function(actor, id, wx, wy, ww, align) {
        if (actor.isStateAffected(77) || actor.isStateAffected(148)) {
            var icon = '\\i[' + Yanfly.Icon.Jp + ']';
            var fmt = Yanfly.Param.JpMenuFormat;
            var text = fmt.format("Haigure", Yanfly.Param.Jp, icon);
            if (align === 'left') {
                wx = 0;
            } else if (align === 'center') {
                wx += (ww - this.textWidthEx(text)) / 2;
            } else {
                wx += ww - this.textWidthEx(text);
            }
            this.drawTextEx(text, wx, wy);
        } else {
            $.Holders.drawActorJp.call(this, actor, id, wx, wy, ww, align);
        }
    };
})(Haigure);