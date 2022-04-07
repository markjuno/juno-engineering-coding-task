import { fetchOrderById } from "../api";
import {bucketOrdersByUsers2, bucketOrdersByUsers3, fetchAllOrders} from "./ecommerce";

const ORDER_ID = "70ef599e5eca171b2bce84d1"
test("Ecommerce - fetchOrderById", async () => {
    let orders = await fetchOrderById(ORDER_ID);
    expect(orders).toBeTruthy();
});
test("Ecommerce - fetchOrderById", async () => {
    let orders = await fetchAllOrders();
    expect(orders).toBeUndefined();
});

test("Ecommerce - bucketOrdersByUsers2", async () => {
    let orders = bucketOrdersByUsers2();
    expect(orders).toBeUndefined();
});

test("Ecommerce - bucketOrdersByUsers3", async () => {
    let orders = await bucketOrdersByUsers3();
    expect(orders).toBeUndefined();
});