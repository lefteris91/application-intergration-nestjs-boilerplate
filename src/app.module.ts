import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { AddonEventController } from './events/addon-events.controller';
import { AffiliateEventController } from './events/affiliate-events.controller';
import { CompanyEventController } from './events/company-events.controller';
import { CouponEventController } from './events/coupon-events.controller';
import { CurrencyEventController } from './events/currency-events.controller';
import { DomainCategoryEventController } from './events/domain-category.controller';
import { DomainNameEventController } from './events/domain-name-events.controller';
import { DomainContactEventController } from './events/domain-contact-events.controller';
import { InvoiceContactEventController } from './events/invoice-contact-events.controller';
import { InvoiceEventController } from './events/invoice-events.controller';
import { IpEventController } from './events/ip-events.controller';
import { IpGroupEventController } from './events/ip-group-events.controller';
import { IssueEventController } from './events/issue-events.controlller';
import { ItemEventController } from './events/item-events.controller';
import { MessageEventController } from './events/message-events.controller';
import { NotificationEventController } from './events/notification-events.controller';
import { OrderEventController } from './events/order-events.controller';
import { PaymentEventController } from './events/payment-events.controller';
import { PolicyEventController } from './events/policy-events.controller';
import { ProductCategoryEventController } from './events/product-category-events.controller';
import { ProductEventController } from './events/product-events.controller';
import { ServiceProviderEventController } from './events/service-provider.controller';
import { SettingEventController } from './events/setting-events.controller';
import { TaskEventController } from './events/task-events.controller';
import { TemplateEventController } from './events/template-events.controller';
import { TemplateProviderEventController } from './events/template-provider.controller';
import { TldEventController } from './events/tld-events.controller';
import { UserEventController } from './events/user-events.controller';

@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    HttpModule,
  ],
  controllers: [
    AppController,
    AddonEventController,
    AffiliateEventController,
    CompanyEventController,
    CouponEventController,
    CurrencyEventController,
    DomainCategoryEventController,
    DomainNameEventController,
    DomainContactEventController,
    InvoiceContactEventController,
    InvoiceEventController,
    IpEventController,
    IpGroupEventController,
    IssueEventController,
    ItemEventController,
    MessageEventController,
    NotificationEventController,
    OrderEventController,
    PaymentEventController,
    PolicyEventController,
    ProductCategoryEventController,
    ProductEventController,
    ServiceProviderEventController,
    SettingEventController,
    TaskEventController,
    TemplateEventController,
    TemplateProviderEventController,
    TldEventController,
    UserEventController,
  ],
  providers: [AppService],
})
export class AppModule {}
