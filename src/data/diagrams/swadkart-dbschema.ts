import type { DiagramData } from "./index";

export const swadkartDbSchema: DiagramData = {
  nodeDefs: [
    { id: "USR", data: { label: "users", sublabel: "name, email, phone, walletBalance, role" } },
    { id: "RST", data: { label: "restaurants", sublabel: "GeoJSON location, rating, isOpen" } },
    { id: "PRD", data: { label: "products", sublabel: "restaurantId, price, variants, stock" } },
    { id: "ORD", data: { label: "orders", sublabel: "status lifecycle, deliveryOTP, paymentInfo" } },
    { id: "CPN", data: { label: "coupons", sublabel: "code, discount%, minOrder, usedBy" } },
    { id: "NOT", data: { label: "notifications", sublabel: "type, title, message, read" } },
    { id: "SUB", data: { label: "subscriptions", sublabel: "plan, start/endDate, isActive" } },
    { id: "PAY", data: { label: "payouts", sublabel: "restaurantId, amount, status" } },
    { id: "REV", data: { label: "reviews", sublabel: "rating, comment" } },
    { id: "COI", data: { label: "coinTransactions", sublabel: "amount, type, credit/debit" } },
  ],
  edgeDefs: [
    { source: "USR", target: "ORD" },
    { source: "USR", target: "RST" },
    { source: "USR", target: "SUB" },
    { source: "USR", target: "COI" },
    { source: "RST", target: "PRD" },
    { source: "RST", target: "PAY" },
    { source: "RST", target: "REV" },
    { source: "ORD", target: "CPN" },
    { source: "ORD", target: "REV" },
  ],
};

export const swadkartDbSchemaMobile: DiagramData = {
  nodeDefs: [
    { id: "USR", data: { label: "users" } },
    { id: "ORD", data: { label: "orders" } },
    { id: "RST", data: { label: "restaurants" } },
    { id: "SUB", data: { label: "subscriptions" } },
    { id: "COI", data: { label: "coin trans" } },
    { id: "CPN", data: { label: "coupons" } },
    { id: "REV", data: { label: "reviews" } },
    { id: "PRD", data: { label: "products" } },
    { id: "PAY", data: { label: "payouts" } },
  ],
  edgeDefs: [
    { source: "USR", target: "ORD" },
    { source: "USR", target: "RST" },
    { source: "USR", target: "SUB" },
    { source: "USR", target: "COI" },
    { source: "ORD", target: "CPN" },
    { source: "ORD", target: "REV" },
    { source: "RST", target: "PRD" },
    { source: "RST", target: "PAY" },
  ],
};
